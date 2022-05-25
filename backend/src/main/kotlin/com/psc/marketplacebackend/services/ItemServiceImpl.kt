package com.psc.marketplacebackend.services

import com.psc.marketplacebackend.models.Item
import com.psc.marketplacebackend.repositories.ItemRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class ItemServiceImpl: ItemService {

    @Autowired
    lateinit var repository: ItemRepository

    override fun getAll(): Iterable<Item> {
        return repository.findAll()
    }

    override fun create(item: Item): Item {
        repository.save(item)
        return item
    }
}