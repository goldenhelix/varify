define(["backbone","../utils"],function(e,t){var n=e.Model.extend({urlRoot:function(){return t.toAbsolutePath("api/analyses/")}}),r=e.Collection.extend({model:n});return{AnalysisModel:n,AnalysisCollection:r}})