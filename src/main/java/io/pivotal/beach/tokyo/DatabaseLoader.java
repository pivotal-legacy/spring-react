package io.pivotal.beach.tokyo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final CakeRepository repository;

    @Autowired
    public DatabaseLoader(CakeRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.repository.save(new Cake("Strawberry Peach And Apple Cake", "Everything all together."));
    }
}