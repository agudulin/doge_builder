// Generated by CoffeeScript 1.7.1
(function() {
  define(["jQuery", "workspace/canvas", "workspace/background", "workspace/modals"], function($, canvas, background, modals) {
    var myAboutModal, myActionBtn, myCanvasTools, mySettingsTools, myShowAboutModalBtn, mySpriteBtn, myToolsPanelToggle;
    myToolsPanelToggle = $(".tools-toggle");
    myCanvasTools = $("#canvas-tools");
    mySettingsTools = $("#settings-tools");
    mySpriteBtn = myCanvasTools.find(".sprite-btn");
    myActionBtn = mySettingsTools.find(".action-btn");
    myShowAboutModalBtn = $("#about-btn");
    myAboutModal = new modals.Modal($("#about-modal"));
    myAboutModal.setShownCallback(function() {
      return myShowAboutModalBtn.addClass("active");
    });
    myAboutModal.setHiddenCallback(function() {
      return myShowAboutModalBtn.removeClass("active");
    });
    myShowAboutModalBtn.on("click", function() {
      return myAboutModal.toggle();
    });
    myToolsPanelToggle.on("click", function() {
      $(this).toggleClass("active");
      return $(this).next(".tools-panel").toggle(200);
    });
    mySpriteBtn.on("click", function() {
      var spriteImagePreview, spriteType;
      spriteImagePreview = $(this).find(".sprite-preview");
      canvas.addSprite(spriteImagePreview);
      spriteType = $(this).data("type");
      return background.addRandomWord(spriteType);
    });
    myActionBtn.on("click", function() {
      var action;
      action = $(this).data("action");
      if (action === "save") {
        return canvas.saveAsImage();
      }
    });
    $("body").on("contextmenu", "#" + canvas.canvasSelector, function() {
      return false;
    });
    return {};
  });

}).call(this);
