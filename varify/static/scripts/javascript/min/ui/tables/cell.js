var __slice=[].slice,__hasProp={}.hasOwnProperty,__extends=function(e,t){function r(){this.constructor=e}for(var n in t)__hasProp.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e};define(["underscore","marionette","../../utils","cilantro/utils/numbers","tpl!templates/varify/empty.html"],function(){var e,t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w;return h=arguments[0],u=arguments[1],c=arguments[2],a=arguments[3],l=5<=arguments.length?__slice.call(arguments,4):[],l=h.object(["empty"],l),e=function(e){function t(){return p=t.__super__.constructor.apply(this,arguments),p}return __extends(t,e),t.prototype.template=l.empty,t.prototype.tagName="td",t}(u.ItemView),t=function(e){function t(){return d=t.__super__.constructor.apply(this,arguments),d}return __extends(t,e),t.prototype.className="flags-container",t.prototype.onRender=function(){var e,t,n,r,i,s,o,u;e=[],e.push(["dbSNP",this.options.variant["rsid"]!=null]),e.push(["HGMD",h.pluck(this.options.variant.phenotypes,"hgmd_id").length>0]),e.push(["1000g",this.options.variant["1000g"].length>0]),e.push(["EVS",this.options.variant.evs.length>0]),t=[];for(s=0,o=e.length;s<o;s++)u=e[s],r=u[0],i=u[1],n=i?"text-info":"muted",t.push('<span class="flag '+n+'">'+r+"</span>");return this.$el.html("<span class=flags>"+t.join("")+"<span>")},t}(e),n=function(e){function t(){return v=t.__super__.constructor.apply(this,arguments),v}return __extends(t,e),t.prototype.className="genes",t.prototype._getGeneHtml=function(e){var t;return t=e.name||"",e.hgnc_id?'<a title="'+t+'" target=_blank href="http://www.genenames.org/data/hgnc_data.php?hgnc_id='+e.hgnc_id+'">'+e.symbol+"</a>":'<span title="'+t+'">'+e.symbol+"</span>"},t.prototype.onRender=function(){var e,t;return t=this.options.genes,t==null||!t.length?this.$el.html("<span class=muted>Unknown</span>"):this.options.collapse||t.length===1?this.$el.html(this._getGeneHtml(t[0])):this.$el.html(function(){var n,r,i;i=[];for(n=0,r=t.length;n<r;n++)e=t[n],i.push(this._getGeneHtml(e));return i}.call(this).join(", "))},t}(e),r=function(e){function t(){return m=t.__super__.constructor.apply(this,arguments),m}return __extends(t,e),t.prototype.className="genomic-position",t.prototype._getCategoryHtml=function(e){var t;return e!=null&&e.assessment_category!=null?(t=[],t.push("<br />Category:"),t.push(e.assessment_category.name),e.assessment_category.id>2&&t.push('<span class="muted">(Incidental Finding)</span>'),"<span class='assessment-category'>"+t.join(" ")+"</span>"):""},t.prototype.onRender=function(){var e,t,n;return t=a.toDelimitedNumber(this.options.position),n='<a target=_blank href="http://genome.ucsc.edu/cgi-bin/hgTracks?position=chr'+this.options.chromosome+"%3A"+this.options.position+'">chr'+this.options.chromosome+" <span class=muted>@</span> "+t+"</a>",e=this._getCategoryHtml(this.options.assessment),this.$el.html(""+n+e)},t}(e),i=function(e){function t(){return g=t.__super__.constructor.apply(this,arguments),g}return __extends(t,e),t.prototype.className="genotype",t.prototype.onRender=function(){return this.options.value!=null?(this.$el.attr("title",""+this.options.value+" ("+(this.options.description||"N/A")+")"),this.$el.html(""+this.options.value+" <small>("+(this.options.description||"N/A")+")</small>"),this.$el.tooltip({container:"body"})):this.$el.html("N/A")},t}(e),s=function(e){function t(){return y=t.__super__.constructor.apply(this,arguments),y}return __extends(t,e),t.prototype.className="hgvs-c",t.prototype.onRender=function(){var e,t,n;return t="N/A",((n=this.options.effects)!=null?n.length:void 0)>0&&(e=this.options.effects[0],e.hgvs_c!=null&&(this.$el.attr("title",e.hgvs_c||""),this.$el.tooltip({container:"body"})),t=""+(e.hgvs_c||"N/A")),this.$el.html(t)},t}(e),o=function(e){function t(){return b=t.__super__.constructor.apply(this,arguments),b}return __extends(t,e),t.prototype.className="hgvs-p",t.prototype.onRender=function(){var e,t,n;return t="N/A",((n=this.options.effects)!=null?n.length:void 0)>0&&(e=this.options.effects[0],t=""+(e.hgvs_p||e.amino_acid_change||"N/A")),this.$el.html(t)},t}(e),f=function(e){function t(){return w=t.__super__.constructor.apply(this,arguments),w}return __extends(t,e),t.prototype.className="variant-effects",t.prototype._getEffectHtml=function(e){var t;return t=[],t.push(""+e.type),e.transcript!=null&&(t.push("<small>"),t.push(e.transcript.transcript),e.segment!=null&&t.push(" @ "+e.segment),t.push("</small>")),t.push("</small>"),t.join(" ")},t.prototype._getPathogenicityHtml=function(e){var t;return e!=null&&e.pathogenicity!=null?(t=[],t.push("<br />Pathogenicity: "),t.push(e.pathogenicity.name),"<span class='pathogenicity'>"+t.join("")+"</span>"):""},t.prototype.onRender=function(){var e,t,n,r,i;return n=this.options.effects,n==null||!n.length?t="<span class=muted>No Effects</span>":this.options.collapse||n.length===1?(r=c.priorityClass(c.effectImpactPriority(n[0].impact)),t="<span class='"+r+"'>"+this._getEffectHtml(n[0])+"</span>"):t=function(){var t,r,i;i=[];for(t=0,r=n.length;t<r;t++)e=n[t],i.push(this._getEffectHtml(e));return i}.call(this).join(", "),i=this._getPathogenicityHtml(this.options.assessment),this.$el.html(""+t+i)},t}(e),{CondensedFlags:t,Gene:n,GenomicPosition:r,Genotype:i,HgvsC:s,HgvsP:o,VariantEffect:f}})