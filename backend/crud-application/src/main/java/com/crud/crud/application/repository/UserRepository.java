package com.crud.crud.application.repository;

import com.crud.crud.application.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByAppUserId(Long appUserId);
}
