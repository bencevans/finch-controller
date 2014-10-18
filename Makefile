
all: dep-install run

run: ~/Development/node-webkit-v0.8.6-linux-x64/nw .

dep-install:
	npm install -g nw-gyp
	npm install
	cd node_modules/finch-robot/node_modules/node-hid/ && nw-gyp rebuild --target=0.8.6

clean:
	rm -rf node_modules