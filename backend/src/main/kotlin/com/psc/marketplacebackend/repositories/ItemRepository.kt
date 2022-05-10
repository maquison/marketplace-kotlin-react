package com.psc.marketplacebackend.repositories

import com.psc.marketplacebackend.models.Item
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ItemRepository : JpaRepository<Item, Long>