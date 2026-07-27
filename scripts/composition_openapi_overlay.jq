# Presentation overlay for the composition OpenAPI document, applied by
# update_api.sh when copying the spec from its source repo.
#
# The generated spec carries no operation summaries and no tag metadata, so
# an API reference renders raw operation ids and machine-named groups. This
# overlay adds human titles and regroups operations, and strips fields marked
# "Internal use only". Belongs in the source generator long-term; keep it
# here until the source spec carries this metadata itself.

def examples: {
  create_composition: { autostart: false, cleanup_without_inputs: false },
  register_input: { type: "whip_server" },
  register_output: {
    type: "whip_client",
    endpoint_url: "https://example.com/whip",
    video: {
      resolution: { width: 1280, height: 720 },
      initial: {
        root: {
          type: "tiles",
          children: [
            { type: "input_stream", input_id: "camera_1" },
            { type: "input_stream", input_id: "camera_2" }
          ]
        }
      }
    },
    audio: { initial: { inputs: [{ input_id: "camera_1" }, { input_id: "camera_2" }] } }
  },
  update_output: {
    video: { root: { type: "rescaler", child: { type: "input_stream", input_id: "camera_1" } } }
  },
  send_composition_event: { event_name: "SET_CAPTION", data: { text: "Welcome to the stream" } },
  link_room: { fishjam_id: "your-fishjam-id", room_id: "room-uuid" }
};

def meta: {
  create_composition: { summary: "Create a composition", tag: "Compositions" },
  delete_composition: { summary: "Delete a composition", tag: "Compositions" },
  start: { summary: "Start a composition", tag: "Compositions" },
  reset: { summary: "Reset a composition", tag: "Compositions" },
  register_input: { summary: "Register an input", tag: "Inputs" },
  unregister_input: { summary: "Unregister an input", tag: "Inputs" },
  register_output: { summary: "Register an output", tag: "Outputs" },
  register_template_output: { summary: "Register a templated output", tag: "Outputs" },
  update_output: { summary: "Update an output's scene", tag: "Outputs" },
  request_keyframe: { summary: "Request a keyframe", tag: "Outputs" },
  unregister_output: { summary: "Unregister an output", tag: "Outputs" },
  register_image: { summary: "Register an image", tag: "Renderers" },
  unregister_image: { summary: "Unregister an image", tag: "Renderers" },
  register_font: { summary: "Register a font", tag: "Renderers" },
  send_composition_event: { summary: "Send an event to templates", tag: "Events" },
  ws: { summary: "Subscribe to engine events", tag: "Events" },
  link_room: { summary: "Link a Fishjam room", tag: "Room forwarding" },
  unlink_room: { summary: "Unlink a Fishjam room", tag: "Room forwarding" },
  whip_offer: { summary: "Publish to an input over WHIP", tag: "Media transport" },
  whep_offer: { summary: "Play an output over WHEP", tag: "Media transport" }
};

del(.components.schemas.WhipInput.properties.endpoint_override)
| .components.schemas.Mp4Input.description = "Input stream from an MP4 file."
| .components.schemas.Framerate.oneOf[0].title = "Ratio string"
| .components.schemas.Framerate.oneOf[1].title = "Frames per second"
| .components.schemas.PortOrPortRange.oneOf[0].title = "Port range string"
| .components.schemas.PortOrPortRange.oneOf[1].title = "Single port"
| .components.schemas.VideoEncoderBitrate.oneOf[0].title = "Average bitrate"
| .components.schemas.VideoEncoderBitrate.oneOf[1].title = "Average and max bitrate"
| .components.schemas.Response.oneOf[0].title = "Bearer token"
| .components.schemas.Response.oneOf[1].title = "Media durations"
| .components.schemas.Response.oneOf[2].title = "Port"
| .components.schemas.Response.oneOf[3].title = "Empty"
| .paths |= map_values(
    map_values(
      if type == "object" and has("operationId") and (meta[.operationId] != null) then
        . + { summary: meta[.operationId].summary, tags: [meta[.operationId].tag] }
        | (if examples[.operationId] != null then
            .requestBody.content["application/json"].example = examples[.operationId]
          else . end)
      else
        .
      end
    )
  )
| .tags = [
    { name: "Compositions", description: "A composition is a single running compositing session. Create one, start it, and delete it when you are done." },
    { name: "Inputs", description: "Live media sources being composed: WHIP, WHEP, RTMP, HLS, or MP4." },
    { name: "Outputs", description: "Where the composed result is sent, over WHIP or RTMP. Each output carries a scene or renders a template." },
    { name: "Renderers", description: "Shared assets, such as images and fonts, that scenes can reference." },
    { name: "Events", description: "Custom events delivered to templates, and the WebSocket stream of engine events." },
    { name: "Room forwarding", description: "Links a Fishjam room to the composition. Called by Fishjam automatically when a room's track forwarding is created." },
    { name: "Media transport", description: "WHIP publishing into inputs and WHEP playback of outputs." }
  ]
