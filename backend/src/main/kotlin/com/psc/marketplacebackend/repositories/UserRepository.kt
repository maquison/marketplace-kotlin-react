package com.psc.marketplacebackend.repositories

import com.psc.marketplacebackend.models.User
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface UserRepository : CrudRepository<User, Long>