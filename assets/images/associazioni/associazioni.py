import glob

css = ""
html = ""

l = glob.glob("*")
n = 0
for e in l: 
	if not ".txt" in e and not ".py" in e and not ".pyc" in e:
		n += 1
		css += ".partner .partner-box-%d {\n  background: url(../images/associazioni/%s) no-repeat center center/contain;\n}\n" % (n,e)
		html += "<div class=\"col-sm-2\">\n\t<a class=\"partner-box partner-box-%d\"></a>\n</div>" % (n)

print(css)

print ("---")

print(html)