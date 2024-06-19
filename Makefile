run-server:
	docker compose up -d

run-ui:
	cd ui && npm run build && npm run preview -- --host --open
