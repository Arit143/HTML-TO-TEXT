const htmlToPlainText = require('./htmlToText');

const testHtml = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<!--

  You can read this newsletter online at
  [webversion]

-->
<html>
<head>
	<meta http-equiv="Content-type" content="text/html; charset=utf-8">
	<title>Premailer Test</title>
	<link rel="stylesheet" type="text/css" href="styles.css">
	<style type="text/css">
		@import "import.css" screen, handheld;
	</style>
	<style type="text/css">
		@import "noimport.css" print;
	</style>
	<style type="text/css">
		#iphone { display: block; }
	</style>
</head>
<body>
<div id="wrapper">
<p class="hide" id="hide01">This line should be hidden.</p>
<p class="hide" id="iphone">This is an iPhone style.</p>
<table width="646" class="container" cellspacing="0" cellpadding="0">
<tr><td id="webversion" colspan="6">Having trouble reading this newsletter? <webversion>Click here to see it in your browser</webversion></td></tr>

<tr><td height="13" colspan="6" class="frame">&#x00a0;</td></tr>



<table width="646" class="container" cellspacing="0" cellpadding="0">

<tr>
	<td class="frame" width="13">&#x00a0;</td>
	<td class="gutter" width="60">&#x00a0;</td>

	<td class="content" colspan="2" width="500">

<h1><span>Premailer Test</span></h1>

<table width="500" cellpadding="0" cellspacing="0">
<tr>
	<td width="20">&#x00a0;</td>
	<td colspan="2" width="460">
		<h2>Lorem ipsum dolor</h2>
		<h3>Suspendisse id velit vitae ligula volutpat condimentum</h3>
		<p class="dt">Morbi commodo, ipsum sed</p>


		<p class="unaligned"><img src="2009-placeholder.png" alt="Image" align="right" class="right">Lorem&nbsp;ipsum&#x00a0;dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. <a href="http://premailer.dialect.ca/">Nulla facilisi</a>. Nulla libero.</p>

		<p attr="another quote">Here&rsquo;s a quote.  Here�s a quote.  &#x201c;Here�s a quote in quotes�.</p>

		<p>Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi.</p>
		<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero.</p>
		<blockquote><p>�Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis.�</p></blockquote>
		<p>Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero.</p>

		<h3>Link tests</h3>
		<ul>
			<li><a id="l01" href="/">Relative path to root</a></li>
			<li><a id="l02" href="http://premailer.dialect.ca/">Absolute path to root</a></li>
			<li><a id="l03" href="http://example.com/">Different domain</a></li>
			<li><a id="l04" href="images/">Relative path to sub-directory</a></li>
			<li><a id="l05" href="#relative">Link is not converted</a></li>
			<li><a id="l06" href="http://example.com/test.html?cn=tf&amp;c=20&amp;ord=%%RANDOM%%">Funky ASP URL</a></li>
			<li><a id="l07" href="?query=string">Appends tracking query string</a></li>
			<li><a id="l08" href="{DONOTCONVERT}">Link is not converted</a></li>
			<li><a id="l09" href="[DONOTCONVERT]">Link is not converted</a></li>
			<li><a id="l10" href="<DONOTCONVERT>">Link is not converted</a></li>
			<li><a id="l11" href="mailto:premailer@example.com">mailto link</a></li>
			<li><a id="l12" href="ftp://example.com">FTP link</a></li>
			<li><a id="l13" href="gopher://gopher.floodgap.com/1/fun/twitpher">Gopher link</a></li>
		</ul>



		<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis.</p>

		<p>&nbsp;</p>


	</td>
	<td width="20">&#x00a0;</td>
</tr>
</table>

<p class="section"><img src="dots_end.png" alt="---" width="499" height="75"></p>
	</td><!-- /#content -->
	<td class="gutter" width="60">&#x00a0;</td>

	<td class="frame" width="13">&#x00a0;</td>
</tr>

<tr>
	<td class="frame" width="13">&#x00a0;</td>
	<td colspan="4" width="620">
		<table summary="Contact information" cellspacing="0" cellpadding="0" width="620">
			<tr><td height="4" class="hairline">&#x00a0;</td></tr>
			<tr><td height="34"class="contact">&#x00a0;</td></tr>
			<tr>

				<td align="center" class="contact" id="contact_info">
					<p id="address">Premailer Test<br>
					<a href="http://dialect.ca/?utm_source=Premailer&utm_medium=Test+Suite&utm_campaign=Premailer">by Dialect</a><br>
					Vancouver Island, British Columbia<br>
					250 555.2222</p>
				</td>

			</tr>
			<tr><td height="34"class="contact">&#x00a0;</td></tr>
			<tr><td height="4" class="hairline">&#x00a0;</td></tr>
		</table>
	</td>
	<td class="frame" width="13">&#x00a0;</td>
</tr>

<tr>
	<td class="frame" width="13">&#x00a0;</td>

	<td colspan="4" class="content" height="60">&#x00a0;</td>
	<td class="frame" width="13">&#x00a0;</td>
</tr>





<tr><td height="13" colspan="6" class="frame">&#x00a0;</td></tr>
<tr><td height="22" colspan="6" >&#x00a0;</td></tr>
<tr><td id="credit" colspan="6">Newsletter communications by<br><a href="http://dialect.ca/dialogue/?utm_source=Dialogue&utm_medium=Credit&utm_campaign=South+Hollow"><img src="inc/dialect.png" alt="Dialect" width="60" height="35" border="0"></a><br><unsubscribe>Click here to unsubscribe</unsubscribe></td></tr>

</table>

</div>
</body>
</html>`;

console.log(htmlToPlainText(testHtml.toString('UTF-8'), 65));

