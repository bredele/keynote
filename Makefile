
components: component.json
	@component install --dev

build: components
	./build/build.js

clean:
	rm -fr build components template.js

.PHONY: clean
