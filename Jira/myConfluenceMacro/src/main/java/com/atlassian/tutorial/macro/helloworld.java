package com.atlassian.tutorial.macro;

import com.atlassian.confluence.content.render.xhtml.ConversionContext;
import com.atlassian.confluence.macro.Macro;
import com.atlassian.confluence.macro.MacroExecutionException;

import java.util.Map;

public class helloworld implements Macro {

    public String execute(Map<String, String> map, String s, ConversionContext conversionContext) throws MacroExecutionException {
        return "<h1>Hello World</h1>";
    }

    public BodyType getBodyType() { return BodyType.NONE; }

    public OutputType getOutputType() { return OutputType.BLOCK; }
}
