SettingsController = RouteController.extend({

    data: function() {
        return {
            hasSettings: !!Settings.find().count(),
            settings: Settings.findOne()
        }
    },

    action: function() {
        document.title = getSetting('title') + " | Settings";
        this.render();
    }
});
