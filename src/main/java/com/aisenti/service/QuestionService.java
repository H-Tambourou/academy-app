package com.aisenti.service;

import java.util.List;

import com.aisenti.model.Question;

public interface QuestionService {

    Question createQuestion(Question question);

    void deleteQuestion(Question question);

    List<Question> getAllQuestions();

    Question getQuestionById(Long id);

}
