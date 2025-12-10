package com.crud.crud.application.controller;

import com.crud.crud.application.exception.UserNotFoundException;
import com.crud.crud.application.model.AppUser;
import com.crud.crud.application.model.User;
import com.crud.crud.application.repository.AppUserRepository;
import com.crud.crud.application.repository.UserRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    private final UserRepository userRepository;
    private final AppUserRepository appUserRepository;

    public UserController(UserRepository userRepository, AppUserRepository appUserRepository) {
        this.userRepository = userRepository;
        this.appUserRepository = appUserRepository;
    }

    private AppUser getCurrentAppUser() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username;
        if (principal instanceof UserDetails) {
            username = ((UserDetails) principal).getUsername();
        } else {
            username = principal.toString();
        }
        return appUserRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Current user not found"));
    }

    @PostMapping("/user")
    User newUser(@RequestBody User newUser) {
        AppUser currentUser = getCurrentAppUser();
        newUser.setAppUser(currentUser);
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    List<User> getAllUsers() {
        AppUser currentUser = getCurrentAppUser();
        return userRepository.findByAppUserId(currentUser.getId());
    }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id) {
        // In a real app, check if user belongs to currentUser
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id) {
        return userRepository.findById(id).map(user -> {
            user.setUsername(newUser.getUsername());
            user.setName(newUser.getName());
            user.setEmail(newUser.getEmail());
            return userRepository.save((user));
        }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id) {
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "user with id " + id + " has been deleted successfully";
    }
}
