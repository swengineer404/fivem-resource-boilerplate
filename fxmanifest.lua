fx_version "cerulean"
game "gta5"

client_scripts {
    "@px-core/client/lib/gui.lua",
    "client/**"
}

server_scripts {
    "server/**"
}

shared_scripts {
    "@px-core/shared/lib/state.lua",
    "@px-core/shared/lib/utils.lua",
    "@px-core/shared/lib/cache.lua",
    "@px-core/shared/lib/log.lua",
    "shared/**"
}

ui_page "html/main.html"

files {
    "html/**",
}

lua54 "yes"
