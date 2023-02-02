<aura:component controller="calcServerController"
                implements="force:appHostable,
                            flexipage:availableForAllPageTypes,
                            flexipage:availableForRecordHome,
                            force:hasRecordId,forceCommunity:availableForAllPageTypes,
                            force:lightningQuickAction" access="global" >
    
    <!-- restaurant  -->
    <aura:attribute name="xnum" type="decimal" />
    <aura:attribute name="ynum" type="decimal" />
    <aura:attribute name="result" type="decimal" />
    <aura:attribute name="msg" type="string" />
    
    
    
    
     <lightning:card variant="Narrow" title="Calculator APEX" iconName="standard:account" footer="{!v.result}">
        <aura:set attribute="actions">
            
                <lightning:button label="+"  onclick="{! c.sum }"/>
                <lightning:button label="-"  onclick="{! c.sub }"/>
                <lightning:button label="*"  onclick="{! c.mul }"/>
                <lightning:button label="/"  onclick="{! c.div }"/>
            
            
        </aura:set>
        <p class="slds-p-horizontal_small">
           
                 <lightning:input type="decimal" name="xnumber" label="Enter X Number" value="{!v.xnum}" 
                         formatter="decimal" step="0.01"/>
    
                <lightning:input type="decimal" name="ynumber" label="Enter Y Number" value="{!v.ynum}" 
                                 formatter="decimal" step="0.01"/>
            
            <br /> 
            <div class="slds-text-heading_medium slds-text-color_error ">{!v.msg} </div>
            
            
            
        </p>
    </lightning:card>
    
    
  
  
    
    
</aura:component>