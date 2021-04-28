package com.example.springtemplate.daos;

import com.example.springtemplate.models.Video;
import com.example.springtemplate.repositories.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class VideoOrmDao {
    @Autowired
    VideoRepository videoRepository;

    @PostMapping("/api/videos")
    public Video createVideo(@RequestBody Video video) {
        return videoRepository.save(video);
    }
    
    @GetMapping("/api/videos")
    public List<Video> findAllVideos() {
        return videoRepository.findAllVideos();
    }
    
    @GetMapping("/api/videos/{videoId}")
    public Video findVideoById(
            @PathVariable("videoId") Integer id) {
        return videoRepository.findVideoById(id);
    }

    @GetMapping("/api/videos/by_user/{userId}")
    public List<Video> findVideosByUserId(
            @PathVariable("userId") Integer id) {
        return videoRepository.findVideosByUserId(id);
    }
    
    @PutMapping("/api/videos/{videoId}")
    public Video updateVideo(
            @PathVariable("videoId") Integer id,
            @RequestBody Video videoUpdates) {
        Video video = videoRepository.findVideoById(id);
        video.setTitle(videoUpdates.getTitle());
        video.setLength(videoUpdates.getLength());
        video.setUserId(videoUpdates.getUserId());
        return videoRepository.save(video);
    }
    
    @DeleteMapping("/api/videos/{videoId}")
    public void deleteVideo(
            @PathVariable("videoId") Integer id) {
        videoRepository.deleteById(id);
    }
}