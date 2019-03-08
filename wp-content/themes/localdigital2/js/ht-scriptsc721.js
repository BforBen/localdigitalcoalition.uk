jQuery(document).ready(function() {
		jQuery(".fancybox").fancybox();
		jQuery('.fancybox-media')
				.attr('rel', 'media-gallery')
				.fancybox({
					openEffect : 'none',
					closeEffect : 'none',
					prevEffect : 'none',
					nextEffect : 'none',

					arrows : true,
					helpers : {
						media : {},
						buttons : {}
					}
				});
		jQuery('p:has(input#url)').addClass('hidden');
	
		// link directly to tabs (resources template)
		jQuery("ul.nav-tabs > li > a").on("shown.bs.tab", function (e) {
			scrollposition = jQuery(document).scrollTop();
			var id = jQuery(e.target).attr("href").substr(1);
			window.location.hash = id;
			jQuery(document).scrollTop(scrollposition);
		});
		
		var hash = window.location.hash;
		jQuery('.nav.nav-tabs a[href="' + hash + '"]').tab('show', function() {
			jQuery(document).scrollTop();
		});
		
		hgg = jQuery(hash).scrollTop();
	});


function markDocumentLinks() {
	jQuery('a[href*=".pdf"]:not(.no-mark)').addClass('pdfdocument').append(' (PDF)');
	jQuery('a[href*=".xls"]:not(.no-mark)').addClass('xlsdocument').append(' (Excel)');
	jQuery('a[href*=".doc"]:not(.no-mark)').addClass('docdocument').append(' (Word)');
	jQuery('a[href*=".txt"]:not(.no-mark)').addClass('txtdocument').append(' (TXT)');
	jQuery('a[href*=".csv"]:not(.no-mark)').addClass('docdocument').append(' (CSV)');
	jQuery('a[href*=".ppt"]:not(.no-mark)').addClass('pptdocument').append(' (PPT)');
	jQuery('a[href*="mailto"]:not(.no-mark)').prepend('<i class="fi-mail"></i> ');
	return true;	
}

function gaTrackDownloadableFiles() {

     var links = jQuery('a');

     for(var i = 0; i < links.length; i++) {
          if (links[i].href.indexOf('.pdf') != "-1") {
               jQuery(links[i]).attr("onclick","javascript: _gaq.push(['_trackPageview', '"+links[i].href+"']);");
          } else if (links[i].href.indexOf('.csv') != "-1") {
               jQuery(links[i]).attr("onclick","javascript: _gaq.push(['_trackPageview', '"+links[i].href+"']);");
          } else if (links[i].href.indexOf('.doc') != "-1") {
               jQuery(links[i]).attr("onclick","javascript: _gaq.push(['_trackPageview', '"+links[i].href+"']);");
          } else if (links[i].href.indexOf('.ppt') != "-1") {
               jQuery(links[i]).attr("onclick","javascript: _gaq.push(['_trackPageview', '"+links[i].href+"']);");
          } else if (links[i].href.indexOf('.rtf') != "-1") {
               jQuery(links[i]).attr("onclick","javascript: _gaq.push(['_trackPageview', '"+links[i].href+"']);");
          } else if (links[i].href.indexOf('.xls') != "-1") {
               jQuery(links[i]).attr("onclick","javascript: _gaq.push(['_trackPageview', '"+links[i].href+"']);");
          } else if (links[i].href.indexOf('.jpg') != "-1") {
               jQuery(links[i]).attr("onclick","javascript: _gaq.push(['_trackPageview', '"+links[i].href+"']);");
          } else if (links[i].href.indexOf('.gif') != "-1") {
               jQuery(links[i]).attr("onclick","javascript: _gaq.push(['_trackPageview', '"+links[i].href+"']);");
          } else if (links[i].href.indexOf('.png') != "-1") {
               jQuery(links[i]).attr("onclick","javascript: _gaq.push(['_trackPageview', '"+links[i].href+"']);");
          }
     }
     return true;    
}

function getCookie(name) {
    var dcookie = document.cookie; 
    var cname = name + "=";
    var clen = dcookie.length;
    var cbegin = 0;
        while (cbegin < clen) {
        var vbegin = cbegin + cname.length;
            if (dcookie.substring(cbegin, vbegin) == cname) { 
            var vend = dcookie.indexOf (";", vbegin);
                if (vend == -1) vend = clen;
            return unescape(dcookie.substring(vbegin, vend));
            }
        cbegin = dcookie.indexOf(" ", cbegin) + 1;
            if (cbegin == 0) break;
        }
    return null;
}

function setCookie(name,value,expires,path,domain,secure) {
	var today = new Date();
	today.setTime( today.getTime() );
	
	if ( expires ) {
		expires = expires * 1000 * 60; // time in minutes
	}
	
	var expires_date = new Date( today.getTime() + (expires) );
	
	document.cookie = name + "=" +escape( value ) +
	( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) +
	( ( path ) ? ";path=" + path : "" ) +
	( ( domain ) ? ";domain=" + domain : "" ) +
	( ( secure ) ? ";secure" : "" );

    return null;
}