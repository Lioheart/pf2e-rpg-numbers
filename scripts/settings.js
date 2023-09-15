Hooks.on("init", () => {

    game.settings.register("pf2e-rpg-numbers", "enabled", {
        name: game.i18n.localize("pf2e-rpg-numbers.module-settings.enabled.name"),
        hint: game.i18n.localize("pf2e-rpg-numbers.module-settings.enabled.hint"),
        scope: "world",
        config: true,
        default: true,
        type: Boolean,
    });
    game.settings.register("pf2e-rpg-numbers", "dmg-enabled", {
        name: game.i18n.localize("pf2e-rpg-numbers.module-settings.dmg-enabled.name"),
        hint: game.i18n.localize("pf2e-rpg-numbers.module-settings.dmg-enabled.hint"),
        scope: "world",
        config: true,
        default: true,
        type: Boolean,
    });
    game.settings.register("pf2e-rpg-numbers", "font-size", {
        name: game.i18n.localize("pf2e-rpg-numbers.module-settings.font-size.name"),
        hint: game.i18n.localize("pf2e-rpg-numbers.module-settings.font-size.hint"),
        scope: "world",
        config: true,
        default: 20,
        type: Number,
    });
    game.settings.register("pf2e-rpg-numbers", "max-font-scale", {
        name: game.i18n.localize("pf2e-rpg-numbers.module-settings.max-font-scale.name"),
        hint: game.i18n.localize("pf2e-rpg-numbers.module-settings.max-font-scale.hint"),
        scope: "world",
        config: true,
        default: 3,
        type: Number,
    });
    game.settings.register("pf2e-rpg-numbers", "top-offset", {
        name: game.i18n.localize("pf2e-rpg-numbers.module-settings.top-offset.name"),
        hint: game.i18n.localize("pf2e-rpg-numbers.module-settings.top-offset.hint"),
        scope: "world",
        config: true,
        default: -25,
        range: {
            min: -100,
            max: 100,
            step: 5
        },
        type: Number,
    });

    game.settings.register("pf2e-rpg-numbers", "show-total", {
        name: game.i18n.localize("pf2e-rpg-numbers.module-settings.show-total.name"),
        hint: game.i18n.localize("pf2e-rpg-numbers.module-settings.show-total.hint"),
        scope: "world",
        config: true,
        default: true,
        type: Boolean,
    });

    game.settings.register("pf2e-rpg-numbers", "number-scale-type", {
        name: game.i18n.localize("pf2e-rpg-numbers.module-settings.number-scale-type.name"),
        hint: game.i18n.localize("pf2e-rpg-numbers.module-settings.number-scale-type.hint"),
        scope: "world",
        config: true,
        default: "percentMaxHealth",
        type: String,
        choices: {
            ["percentRemainingHealth"]: game.i18n.localize("pf2e-rpg-numbers.module-settings.number-scale-type.choices.percent-remaining-health"),
            ["percentMaxHealth"]: game.i18n.localize("pf2e-rpg-numbers.module-settings.number-scale-type.choices.percent-max-health"),
            ["none"]: game.i18n.localize("pf2e-rpg-numbers.module-settings.number-scale-type.choices.none"),
        },
    });

    game.settings.register("pf2e-rpg-numbers", "damage-split", {
        name: game.i18n.localize("pf2e-rpg-numbers.module-settings.damage-split.name"),
        hint: game.i18n.localize("pf2e-rpg-numbers.module-settings.damage-split.hint"),
        scope: "world",
        config: true,
        default: "by-damage-type",
        type: String,
        choices: {
            ["none"]: game.i18n.localize("pf2e-rpg-numbers.module-settings.damage-split.choices.none"),
            ["by-damage-type"]: game.i18n.localize("pf2e-rpg-numbers.module-settings.damage-split.choices.by-damage-type"),
            ["all"]: game.i18n.localize("pf2e-rpg-numbers.module-settings.damage-split.choices.all"),
        },
    });
    game.settings.register("pf2e-rpg-numbers", "duration", {
        name: game.i18n.localize("pf2e-rpg-numbers.module-settings.duration.name"),
        hint: game.i18n.localize("pf2e-rpg-numbers.module-settings.duration.hint"),
        scope: "world",
        config: true,
        default: 2,
        range: {
            min: 0,
            max: 10,
            step: 0.1
        },
        type: Number,
    });
    game.settings.register("pf2e-rpg-numbers", "wait-time-between-numbers", {
        name: game.i18n.localize("pf2e-rpg-numbers.module-settings.wait-time-between-numbers.name"),
        hint: game.i18n.localize("pf2e-rpg-numbers.module-settings.wait-time-between-numbers.hint"),
        scope: "world",
        config: true,
        default: 100,
        range: {
            min: 0,
            max: 1000,
            step: 1
        },
        type: Number,
    });
    game.settings.register("pf2e-rpg-numbers", "show-only-GM", {
        name: game.i18n.localize("pf2e-rpg-numbers.module-settings.show-only-GM.name"),
        hint: game.i18n.localize("pf2e-rpg-numbers.module-settings.show-only-GM.hint"),
        scope: "world",
        config: true,
        default: false,
        type: Boolean,
    });

    game.settings.register("pf2e-rpg-numbers", "animation-scale", {
        name: game.i18n.localize("pf2e-rpg-numbers.module-settings.animation-scale.name"),
        hint: game.i18n.localize("pf2e-rpg-numbers.module-settings.animation-scale.hint"),
        scope: "world",
        config: true,
        default: 1,
        range: {
            min: 0,
            max: 2,
            step: 0.05
        },
        type: Number,
    });
    game.settings.register("pf2e-rpg-numbers", "jitter", {
        name: game.i18n.localize("pf2e-rpg-numbers.module-settings.jitter.name"),
        hint: game.i18n.localize("pf2e-rpg-numbers.module-settings.jitter.hint"),
        scope: "world",
        config: true,
        default: 0,
        range: {
            min: 0,
            max: 1,
            step: 0.05
        },
        type: Number,
    });
    game.settings.register("pf2e-rpg-numbers", "check-font-size", {
        name: game.i18n.localize("pf2e-rpg-numbers.module-settings.check-font-size.name"),
        hint: game.i18n.localize("pf2e-rpg-numbers.module-settings.check-font-size.hint"),
        scope: "world",
        config: true,
        default: 30,
        type: Number,
    });
    game.settings.register("pf2e-rpg-numbers", "check-duration", {
        name: game.i18n.localize("pf2e-rpg-numbers.module-settings.check-duration.name"),
        hint: game.i18n.localize("pf2e-rpg-numbers.module-settings.check-duration.hint"),
        scope: "world",
        config: true,
        default: 2,
        range: {
            min: 0,
            max: 10,
            step: 0.1
        },
        type: Number,
    });
    game.settings.register("pf2e-rpg-numbers", "check-enabled", {
        name: game.i18n.localize("pf2e-rpg-numbers.module-settings.check-enabled.name"),
        hint: game.i18n.localize("pf2e-rpg-numbers.module-settings.check-enabled.hint"),
        scope: "world",
        config: true,
        default: true,
        type: Boolean,
    });




    game.settings.register("pf2e-rpg-numbers", "debug-mode", {
        name: game.i18n.localize("pf2e-rpg-numbers.module-settings.debug-mode.name"),
        hint: game.i18n.localize("pf2e-rpg-numbers.module-settings.debug-mode.hint"),
        scope: "world",
        config: true,
        default: false,
        type: Boolean,
    });
});
