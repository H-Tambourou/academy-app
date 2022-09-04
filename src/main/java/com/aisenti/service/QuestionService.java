package com.aisenti.service;

import com.aisenti.model.Question;

public interface QuestionService {

    Question createQuestion(Question question);

    void deleteQuestion(Question question);

    Question getProjectById(Long id);

}
