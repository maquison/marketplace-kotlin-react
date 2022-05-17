package com.psc.marketplacebackend.controllers

import com.psc.marketplacebackend.models.Item
import com.psc.marketplacebackend.repositories.ItemRepository
import com.psc.marketplacebackend.services.ItemService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@RestController
@RequestMapping("/api")
class ItemController (private val itemRepository: ItemRepository) {

    @Autowired
    lateinit var itemService: ItemService

    @GetMapping("/items")
    fun getAllItems(): List<Item> =
        itemService.getAll()


    @PostMapping("/items")
    fun createNewItem(@Valid @RequestBody item: Item): Item =
        itemService.create(item)
}