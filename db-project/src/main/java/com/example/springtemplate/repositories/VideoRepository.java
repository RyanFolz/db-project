package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Video;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface VideoRepository
        extends CrudRepository<Video, Integer> {
    @Query(value = "SELECT * FROM videos",
            nativeQuery = true)
    public List<Video> findAllVideos();
    @Query(value = "SELECT * FROM videos WHERE id=:videoId",
            nativeQuery = true)
    public Video findVideoById(@Param("videoId") Integer id);
    @Query(value = "SELECT * FROM videos WHERE user_id=:userId", nativeQuery = true)
    public List<Video> findVideosByUserId(@Param("userId") Integer id);
}
