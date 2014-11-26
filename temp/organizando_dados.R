state_loc = read.csv("usa_artist_state_location.csv")
states = unique(state_loc$state)
state_siglas = read.csv("siglas.csv")
artista_tag = read.csv("artist_mbtag.csv")

state_siglas = merge(state_loc, state_siglas, by.x = "state", by.y = "unique.state_loc.state.")
state_siglas$lat = NULL
state_siglas$lon = NULL
state_siglas$state = NULL

write.csv(state_siglas, "state_siglas.csv", quote = F, row.names = F)

artista_tag$contador = 1

tag_cont = aggregate(contador ~ mbtag, artista_tag, FUN = sum)

tag_cont = tag_cont[with(tag_cont, order(-contador, mbtag)), ]

barplot(table(artista_tag$mbtag))
