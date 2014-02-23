
components: component.json
	@component install --dev

build: components
	./build/build.js

run: build
	./bin/keynote -o './test/hello/keynote' -p './test/hello'

clean:
	rm -fr build components template.js

.PHONY: clean
