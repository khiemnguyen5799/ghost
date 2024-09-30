FROM ghost:latest

# Optional: Copy your custom configurations, themes, etc.
# COPY ./your-custom-folder /var/lib/ghost/content

EXPOSE 2368

CMD ["node", "current/index.js"]
