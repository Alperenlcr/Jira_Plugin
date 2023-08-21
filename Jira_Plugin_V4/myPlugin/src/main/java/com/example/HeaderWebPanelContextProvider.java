package com.example;

import com.atlassian.jira.plugin.webfragment.contextproviders.AbstractJiraContextProvider;
import com.atlassian.jira.plugin.webfragment.model.JiraHelper;
import java.util.Map;

public class HeaderWebPanelContextProvider extends AbstractJiraContextProvider {

  @Override
  public Map<String, Object> getContextMap(JiraHelper jiraHelper) {
    System.out.println("Hello World");
    return super.getContextMap(jiraHelper);
  }
  
}

