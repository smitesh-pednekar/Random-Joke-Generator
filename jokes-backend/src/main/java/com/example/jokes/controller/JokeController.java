package com.example.jokes.controller;

import com.example.jokes.dto.JokeDto;
import com.example.jokes.service.JokeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/jokes")
public class JokeController {
    private final JokeService jokes;

    public JokeController(JokeService jokes) {
        this.jokes = jokes;
    }

    @GetMapping("/random")
    public ResponseEntity<JokeDto> random() {
        JokeDto j = jokes.random();
        return (j != null) ? ResponseEntity.ok(j) : ResponseEntity.status(502).build();
    }

    @GetMapping("/{type}/random")
    public ResponseEntity<JokeDto> randomByType(@PathVariable String type) {
        JokeDto j = jokes.randomByType(type);
        return (j != null) ? ResponseEntity.ok(j) : ResponseEntity.notFound().build();
    }
}
