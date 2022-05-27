package com.psc.marketplacebackend.repositories

import com.psc.marketplacebackend.models.Item
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.domain.Specification
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface ItemRepository : CrudRepository<Item, Long>{
    fun findAll(pageable: Pageable): Page<Item>

}
