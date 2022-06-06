package com.psc.marketplacebackend.services

import com.psc.marketplacebackend.models.Item
import com.psc.marketplacebackend.repositories.ItemRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service

@Service
class ItemServiceImpl: ItemService {

    @Autowired
    lateinit var repository: ItemRepository

    override fun getAll(): Iterable<Item> {
        return repository.findAll()
    }

    override fun findAll(pageable: Pageable): Page<Item> {
        return repository.findAll(pageable)
    }

    override fun getByID(itemID: Long): ResponseEntity<Item> {
        return repository.findById(itemID).map { item ->
            ResponseEntity.ok(item)
        }.orElse(ResponseEntity.notFound().build())
    }

    override fun create(item: Item): Item {
        repository.save(item)
        return item
    }
}