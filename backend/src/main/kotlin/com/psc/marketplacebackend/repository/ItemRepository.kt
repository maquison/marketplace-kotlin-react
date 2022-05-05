package com.psc.marketplacebackend.repository

import com.psc.marketplacebackend.model.Item
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ItemRepository : JpaRepository<Item, Long>