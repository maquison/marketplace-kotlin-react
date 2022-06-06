package com.psc.marketplacebackend.services

import com.psc.marketplacebackend.models.Item
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.http.ResponseEntity

interface ItemService {

    fun getAll(): Iterable<Item>
    fun findAll(pageable: Pageable): Page<Item>
    fun getByID(itemID: Long): ResponseEntity<Item>
    fun create(item: Item): Item

}