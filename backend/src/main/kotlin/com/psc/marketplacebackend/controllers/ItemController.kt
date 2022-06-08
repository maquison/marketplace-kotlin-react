package com.psc.marketplacebackend.controllers

import com.psc.marketplacebackend.models.Item
import com.psc.marketplacebackend.repositories.ItemRepository
import com.psc.marketplacebackend.services.ItemService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@RestController
@RequestMapping("/api")
class ItemController (private val itemRepository: ItemRepository) {

    @Autowired
    lateinit var itemService: ItemService

    @GetMapping("/items")
    fun getAllItems(): Iterable<Item> =
        itemService.getAll()

    @GetMapping("/items-page")
    fun getItemsPage(pageable: Pageable): Page<Item> =
        itemService.findAll(pageable)

    @GetMapping("/item/{id}")
    fun getItemByID(@PathVariable(value = "id") itemID: Long): ResponseEntity<Item> =
        itemService.getByID(itemID)

    @PostMapping("/items")
    fun createNewItem(@Valid @RequestBody item: Item): Item =
        itemService.create(item)
}