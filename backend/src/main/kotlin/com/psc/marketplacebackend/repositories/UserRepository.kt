package com.psc.marketplacebackend.repositories

import com.psc.marketplacebackend.models.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface UserRepository : JpaRepository<User, Long>