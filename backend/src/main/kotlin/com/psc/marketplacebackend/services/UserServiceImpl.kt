package com.psc.marketplacebackend.services

import com.psc.marketplacebackend.models.User
import com.psc.marketplacebackend.repositories.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service

@Service
class UserServiceImpl : UserService {

    @Autowired
    lateinit var repository: UserRepository

    override fun getAll(): List<User> {
        TODO("Not yet implemented")
    }

    override fun create(User: User): User {
        TODO("Not yet implemented")
    }

    override fun getByID(userID: Long): ResponseEntity<User> {
        return repository.findById(userID).map { user ->
            ResponseEntity.ok(user)
        }.orElse(ResponseEntity.notFound().build())
    }

    override fun updateByID(userID: Long, newUser: User): ResponseEntity<User> {
        return repository.findById(userID).map { existingUser ->
            val updatedUser: User = existingUser
                .copy(username = newUser.username, password = newUser.password, firstName = newUser.firstName, lastName = newUser.lastName)
            ResponseEntity.ok().body(repository.save(updatedUser))
        }.orElse(ResponseEntity.notFound().build())
    }

    override fun removeByID(userID: Long): ResponseEntity<Void> {
        return repository.findById(userID).map { user  ->
            repository.delete(user)
            ResponseEntity<Void>(HttpStatus.OK)
        }.orElse(ResponseEntity.notFound().build())
    }
}