package com.example.backend.api.entity.diary;

import com.example.backend.api.dto.diary.request.RequestDiary;
import com.example.backend.api.dto.diary.response.ResponseDiary;
import com.example.backend.api.entity.users.Users;
import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Entity(name = "diary")
public class Diary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "no")
    private Long no;

    @Column(name = "title")
    private String title;

    @Column(name = "content")
    private String content;

    @Column(name = "emotion")
    private String emotion;

    @Column(name = "registed_date")
    private String registedDate;

    @ManyToOne
    @JoinColumn(name = "no", insertable = false, updatable = false)
    private Users users;

    @OneToMany(mappedBy = "diary", cascade = CascadeType.ALL)
    private List<Photos> photos;

    @Builder
    public Diary(Long no, String title, String content, String emotion,
        String registedDate, List<Photos> photos) {
        this.no = no;
        this.title = title;
        this.content = content;
        this.emotion = emotion;
        this.registedDate = registedDate;
        this.photos = photos;
    }

    public ResponseDiary toDTO() {
        return ResponseDiary.builder()
            .id(this.id)
            .title(this.title)
            .content(this.content)
            .emotion(this.emotion)
            .registedDate(this.registedDate)
            .responsePhotos(this.photos.stream()
                .map(Photos::toDTO)
                .collect(Collectors.toList()))
            .build();
    }

    public void updateDiary(RequestDiary requestDiary) {
        this.title = requestDiary.getTitle();
        this.content = requestDiary.getContent();
        this.emotion = requestDiary.getEmotion();
    }
}