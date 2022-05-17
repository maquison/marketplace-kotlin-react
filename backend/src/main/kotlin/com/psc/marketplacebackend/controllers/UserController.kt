package com.psc.marketplacebackend.controllers

import com.psc.marketplacebackend.models.User
import com.psc.marketplacebackend.services.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@RestController
@RequestMapping("/api")
class UserController {

    @Autowired
    lateinit var userService: UserService

    @GetMapping("/users")
    fun getAllUsers(): List<User> =
        userService.getAll()


    @PostMapping("/users")
    fun createNewUser(@Valid @RequestBody user: User): User =
        userService.create(user)

    @GetMapping("/users/{id}")
    fun getUserByID(@PathVariable(value = "id") userID: Long): ResponseEntity<User> =
        userService.getByID(userID)

    @PutMapping("/users/{id}")
    fun updateUserById(@PathVariable(value = "id") userId: Long, @Valid @RequestBody newUser: User): ResponseEntity<User> =
        userService.updateByID(userId, newUser)

    @DeleteMapping("/users/{id}")
    fun removeUserById(@PathVariable(value = "id") userID: Long): ResponseEntity<Void> =
        userService.removeByID(userID)
}