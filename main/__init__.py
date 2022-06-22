from distutils.command.config import config
from main.settings.base import *

env_name = config("ENV_NAME") 

if env_name == "prod":
    from main.settings.prod import *
elif env_name == "dev":
    from main.settings.dev import *
