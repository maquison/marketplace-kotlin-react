package com.psc.marketplacebackend.controller

import com.psc.marketplacebackend.model.Item
import com.psc.marketplacebackend.repository.ItemRepository
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@RestController
@RequestMapping("/api")
class ItemController (private val itemRepository: ItemRepository) {

    @GetMapping("/items")
    fun getAllItems(): List<Item> =
        itemRepository.findAll()


    @PostMapping("/items")
    fun createNewArticle(@Valid @RequestBody item: Item): Item =
        itemRepository.save(item)
}