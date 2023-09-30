CKEDITOR.ClassicEditor.create(document.getElementById("editor"), {
  toolbar: {
    items: ["bold", "link", "insertImage"],
    shouldNotGroupWhenFull: true,
  },
  image: {
    toolbar: [],
  },
  // https://ckeditor.com/docs/ckeditor5/latest/features/editor-placeholder.html#using-the-editor-configuration
  placeholder: "本文を入力してください。",
  // Be careful with the setting below. It instructs CKEditor to accept ALL HTML markup.
  // https://ckeditor.com/docs/ckeditor5/latest/features/general-html-support.html#enabling-all-html-features
  htmlSupport: {
    allow: [
      {
        name: /.*/,
        attributes: true,
        classes: true,
        styles: true,
      },
    ],
  },
  // Be careful with enabling previews
  // https://ckeditor.com/docs/ckeditor5/latest/features/html-embed.html#content-previews
  htmlEmbed: {
    showPreviews: true,
  },
  // https://ckeditor.com/docs/ckeditor5/latest/features/link.html#custom-link-attributes-decorators
  link: {
    decorators: {
      addTargetToExternalLinks: true,
      defaultProtocol: "https://",
    },
  },
  // The "super-build" contains more premium features that require additional configuration, disable them below.
  // Do not turn them on unless you read the documentation and know how to configure them and setup the editor.
  removePlugins: [
    // These two are commercial, but you can try them out without registering to a trial.
    // 'ExportPdf',
    // 'ExportWord',
    "CKBox",
    "CKFinder",
    "EasyImage",
    // This sample uses the Base64UploadAdapter to handle image uploads as it requires no configuration.
    // https://ckeditor.com/docs/ckeditor5/latest/features/images/image-upload/base64-upload-adapter.html
    // Storing images as Base64 is usually a very bad idea.
    // Replace it on production website with other solutions:
    // https://ckeditor.com/docs/ckeditor5/latest/features/images/image-upload/image-upload.html
    // 'Base64UploadAdapter',
    "RealTimeCollaborativeComments",
    "RealTimeCollaborativeTrackChanges",
    "RealTimeCollaborativeRevisionHistory",
    "PresenceList",
    "Comments",
    "TrackChanges",
    "TrackChangesData",
    "RevisionHistory",
    "Pagination",
    "WProofreader",
    // Careful, with the Mathtype plugin CKEditor will not load when loading this sample
    // from a local file system (file://) - load this site via HTTP server if you enable MathType.
    "MathType",
    // The following features are part of the Productivity Pack and require additional license.
    "SlashCommand",
    "Template",
    "DocumentOutline",
    "FormatPainter",
    "TableOfContents",
    "PasteFromOfficeEnhanced",
  ],
});
