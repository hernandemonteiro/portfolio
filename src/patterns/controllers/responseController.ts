export function responseController(
  conditional,
  awaitedResponse,
  responseOfRequest
) {
  conditional
    ? responseOfRequest.status(200).json(awaitedResponse)
    : responseOfRequest.status(500).json({
        errors: ["Houve um erro, por favor tente novamente mais tarde!"],
      });
}
