export * from './ts-toolbelt';
export * from './ramda';
import * as Date from 'date-fns'
export {
    Date
}

var parseString = require('xml2js').parseString;
var xml = `<?xml version="1.0" encoding="UTF-8"?>  
<beans xmlns="http://www.springframework.org/schema/beans"  
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  
    xsi:schemaLocation="http://www.springframework.org/schema/beans    
http://www.springframework.org/schema/beans/spring-beans-2.5.xsd">  
    <bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">  
        <property name="driverClass">  
            <value>com.mysql.jdbc.Driver</value>  
        </property>  
        <property name="jdbcUrl">  
            <value>jdbc:mysql://localhost:3306/eportal?useUnicode=  
                true&characterEncoding=gbk</value>  
        </property>  
        <property name="user">  
            <value>root</value>  
        </property>  
        <property name="password">  
            <value>root</value>  
        </property>  
        <property name="maxPoolSize">  
            <value>20</value>  
        </property>  
        <property name="minPoolSize">  
            <value>2</value>  
        </property>  
        <property name="initialPoolSize">  
            <value>2</value>  
        </property>  
        <property name="maxIdleTime">  
            <value>20</value>  
        </property>  
    </bean>  
    <bean id="sessionFactory"  
        class="org.springframework.orm.  
hibernate3.LocalSessionFactoryBean">  
        <property name="dataSource" ref="dataSource" />  
        <property name="mappingResources">  
            <list>  
                <value>com/eportal/ORM/News.hbm.xml</value>  
                <value>com/eportal/ORM/Category.hbm.xml</value>  
                <value>com/eportal/ORM/Memberlevel.hbm.xml</value>  
                <value>com/eportal/ORM/Cart.hbm.xml</value>  
                <value>com/eportal/ORM/Traffic.hbm.xml</value>  
                <value>com/eportal/ORM/Newsrule.hbm.xml</value>  
                <value>com/eportal/ORM/Merchandise.hbm.xml</value>  
                <value>com/eportal/ORM/Admin.hbm.xml</value>  
                <value>com/eportal/ORM/Orders.hbm.xml</value>  
                <value>com/eportal/ORM/Cartselectedmer.hbm.xml</value>  
                <value>com/eportal/ORM/Newscolumns.hbm.xml</value>  
                <value>com/eportal/ORM/Member.hbm.xml</value>  
            </list>  
        </property>  
        <property name="hibernateProperties">  
            <props>  
                <prop key="hibernate.dialect">org.hibernate.dialect.MySQLDialect</prop>  
                <prop key="show_sql">true</prop>  
                <prop key="hibernate.jdbc.batch_size">50</prop>  
                <prop key="show_sql">50</prop>  
            </props>  
        </property>  
    </bean>  
    <bean id="transactionManager"  
        class="org.springframework.orm.hibernate3.HibernateTransactionManager">  
        <property name="sessionFactory" ref="sessionFactory" />  
    </bean>  
    <bean id="transactionInterceptor"  
        class="org.springframework.transaction.interceptor.TransactionInterceptor">  
        <property name="transactionManager" ref="transactionManager" />  
        <property name="transactionAttributes">  
            <props>  
                <prop key="browse*">PROPAGATION_REQUIRED,readOnly</prop>  
                <prop key="list*">PROPAGATION_REQUIRED,readOnly</prop>  
                <prop key="load*">PROPAGATION_REQUIRED,readOnly</prop>  
                <prop key="get*">PROPAGATION_REQUIRED,readOnly</prop>  
                <prop key="is*">PROPAGATION_REQUIRED,readOnly</prop>  
                <prop key="*">PROPAGATION_REQUIRED</prop>  
            </props>  
        </property>  
    </bean>  
    <bean  
        class="org.springframework.aop.framework.autoproxy.    
BeanNameAutoProxyCreator">  
        <property name="beanNames">  
            <list>  
                <value>adminService</value>  
                <value>columnsService</value>  
                <value>newsService</value>  
                <value>crawlService</value>  
                <value>memberLevelService</value>  
                <value>memberService</value>  
                <value>categoryService</value>  
                <value>merService</value>  
                <value>cartService</value>  
                <value>ordersService</value>  
                <value>trafficService</value>  
            </list>  
        </property>  
        <property name="proxyTargetClass">  
            <value>true</value>  
        </property>  
        <property name="interceptorNames">  
            <list>  
                <value>transactionInterceptor</value>  
            </list>  
        </property>  
    </bean>  
    <bean id="dao" class="com.eportal.DAO.BaseDAOImpl">  
        <property name="sessionFactory" ref="sessionFactory" />  
    </bean>  
    <bean id="adminService" class="com.eportal.service.AdminServiceImpl">  
        <property name="dao" ref="dao" />  
    </bean>  
    <bean id="columnsService" class="com.eportal.service.ColumnsServiceImpl">  
        <property name="dao" ref="dao" />  
    </bean>  
    <bean id="ordersService" class="com.eportal.service.OrderServiceImpl">  
        <property name="dao" ref="dao" />  
    </bean>  
    <bean id="trafficService" class="com.eportal.service.TrafficServiceImpl">  
        <property name="dao" ref="dao" />  
    </bean>  
    <bean id="adminAction" class="com.eportal.struts.action.  
AdminAction"  
        scope="prototype">  
        <property name="service" ref="adminService" />  
    </bean>  
    <bean id="columnsAction" class="com.eportal.struts.action.  
ColumnsAction"  
        scope="prototype">  
        <property name="service" ref="columnsService" />  
    </bean>  
    <bean id="newsAction" class="com.eportal.struts.action.  
NewsAction"  
        scope="prototype">  
        <property name="service" ref="newsService" />  
        <property name="columnsService" ref="columnsService" />  
    </bean>  
    <bean id="crawlAction" class="com.eportal.struts.action.  
CrawlAction"  
        scope="prototype">  
        <property name="service" ref="crawlService" />  
        <property name="columnsService" ref="columnsService" />  
    </bean>  
</beans> `
parseString(xml, (err: Error, result: any) => {
    console.dir(result);
    debugger;
});
