define(["cilantro","marionette"],function(e,t){var n=t.ItemView.extend({className:"analysis-item",template:"varify/analysis/item",events:{"click a":"onClick"},modelEvents:{sync:"render"},ui:{status:"[data-target=status-label]"},setStatus:function(e){this.ui.status.removeClass("label-info label-warning label-success label-important").addClass(e)},onClick:function(){e.trigger("analysis:item:click",this,this.model)},onRender:function(){switch(this.model.get("status")){case"Open":this.setStatus("label-info");break;case"Pending":this.setStatus("label-warning");break;case"Complete":this.setStatus("label-success");break;default:this.setStatus("label-important")}}}),r=t.ItemView.extend({className:"assessment-item",template:"varify/analysis/assessment-item",modelEvents:{sync:"render"}});return{AnalysisItem:n,AssessmentItem:r}})