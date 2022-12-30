const express = require('express');
const path = require('path');

exports.onCreateDevServer = async ({ app }) => {
  app.use(express.static(path.join(__dirname, 'public')));
}
