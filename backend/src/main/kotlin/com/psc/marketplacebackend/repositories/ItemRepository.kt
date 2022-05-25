package com.psc.marketplacebackend.repositories

import com.psc.marketplacebackend.models.Item
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface ItemRepository : CrudRepository<Item, Long>