package com.example.jokes.service;

import com.example.jokes.dto.JokeDto;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

@Service
public class JokeService {
    private final RestClient rest;

    public JokeService(RestClient jokeRestClient) {
        this.rest = jokeRestClient;
    }

    public JokeDto random() {
        // Upstream: /random_joke -> single object
        return rest.get()
                .uri("/random_joke")
                .retrieve()
                .body(JokeDto.class);
    }

    public JokeDto randomByType(String type) {
        // Upstream: /jokes/{type}/random -> array; normalize to one object
        JokeDto[] arr = rest.get()
                .uri("/jokes/{type}/random", type)
                .retrieve()
                .body(JokeDto[].class);
        return (arr != null && arr.length > 0) ? arr[0] : null;
    }
}
