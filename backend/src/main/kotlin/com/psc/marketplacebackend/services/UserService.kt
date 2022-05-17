package com.psc.marketplacebackend.services

import com.psc.marketplacebackend.models.Item
import com.psc.marketplacebackend.models.User
import org.springframework.http.ResponseEntity

interface UserService {

    fun getAll(): List<User>
    fun create(User: User): User
    fun getByID(userID: Long): ResponseEntity<User>
    fun updateByID(userID: Long, newUser: User): ResponseEntity<User>
    fun removeByID(userID: Long): ResponseEntity<Void>
}