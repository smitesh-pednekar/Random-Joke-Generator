package com.example.jokes.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestClient;

@Configuration
public class RestClientConfig {

    @Bean
    RestClient jokeRestClient() {
        return RestClient.builder()
                .baseUrl("https://official-joke-api.appspot.com")
                .build();
    }
}
