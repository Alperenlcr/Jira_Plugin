package ut.Turkcell_Staj.alperenlcr;

import org.junit.Test;
import Turkcell_Staj.alperenlcr.api.MyPluginComponent;
import Turkcell_Staj.alperenlcr.impl.MyPluginComponentImpl;

import static org.junit.Assert.assertEquals;

public class MyComponentUnitTest
{
    @Test
    public void testMyName()
    {
        MyPluginComponent component = new MyPluginComponentImpl(null);
        assertEquals("names do not match!", "myComponent",component.getName());
    }
}