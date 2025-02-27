const htmlDocx = require('html-docx-js-typescript')
const juice = require('juice')
const { response } = require('@jsreport/office')

module.exports = (reporter, definition) => async (req, res) => {
  const htmlContent = res.content.toString()
  let docxContent

  try {
    const docxBuffer = await htmlDocx.asBlob(juice(htmlContent))
    docxContent = docxBuffer.toString('base64')
  } catch (err) {
    const error = new Error(err.message)
    error.stack = err.stack

    throw reporter.createError('Error while processing html into docx', {
      original: error,
      weak: true
    })
  }

  await response({
    previewOptions: definition.options.preview,
    officeDocumentType: 'docx',
    buffer: Buffer.from(docxContent, 'base64')
  }, req, res)
}
